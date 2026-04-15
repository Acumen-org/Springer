# Dockerfile for HashiCorp Nomad
# Multi-stage build for production-ready Nomad image

# Build stage - download and verify Nomad
FROM alpine:latest AS builder

# Set Nomad version
ARG NOMAD_VERSION=1.7.6

# Install dependencies
RUN apk add --no-cache \
    curl \
    unzip \
    gnupg

# Download and verify Nomad
WORKDIR /tmp
RUN curl -LO https://releases.hashicorp.com/nomad/${NOMAD_VERSION}/nomad_${NOMAD_VERSION}_linux_amd64.zip \
    && curl -LO https://releases.hashicorp.com/nomad/${NOMAD_VERSION}/nomad_${NOMAD_VERSION}_SHA256SUMS \
    && curl -LO https://releases.hashicorp.com/nomad/${NOMAD_VERSION}/nomad_${NOMAD_VERSION}_SHA256SUMS.sig

# Verify signature and checksum
RUN gpg --keyserver keyserver.ubuntu.com --recv-keys C874011F0AB405110D02105534365D9472D7468F \
    && gpg --verify nomad_${NOMAD_VERSION}_SHA256SUMS.sig nomad_${NOMAD_VERSION}_SHA256SUMS \
    && grep nomad_${NOMAD_VERSION}_linux_amd64.zip nomad_${NOMAD_VERSION}_SHA256SUMS | sha256sum -c

# Unzip Nomad
RUN unzip nomad_${NOMAD_VERSION}_linux_amd64.zip \
    && chmod +x nomad

# Runtime stage
FROM alpine:latest

# Install runtime dependencies
RUN apk add --no-cache \
    ca-certificates \
    dumb-init \
    iptables \
    ip6tables \
    su-exec

# Create nomad user
RUN addgroup -S nomad && adduser -S -G nomad nomad

# Copy Nomad binary from builder
COPY --from=builder /tmp/nomad /bin/nomad

# Create necessary directories
RUN mkdir -p /nomad/data /nomad/config \
    && chown -R nomad:nomad /nomad

# Set environment variables
ENV NOMAD_DATA_DIR=/nomad/data
ENV NOMAD_CONFIG_DIR=/nomad/config

# Expose Nomad ports
# HTTP API - 4646
# RPC - 4647
# Serf WAN - 4648
EXPOSE 4646 4647 4648 4648/udp

# Volume for persistent data
VOLUME ["/nomad/data", "/nomad/config"]

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD nomad status || exit 1

# Use dumb-init for proper signal handling
ENTRYPOINT ["dumb-init", "--"]

# Default command runs nomad as nomad user
CMD ["su-exec", "nomad", "nomad", "agent", "-config", "/nomad/config"]

# Labels
LABEL maintainer="Acumen-org" \
      vendor="HashiCorp" \
      product="Nomad" \
      version="${NOMAD_VERSION}"
