job "acumen-springer" {
  datacenters = ["acumen-dc"]
  type        = "service"
  namespace   = "platform"

  update {
    max_parallel     = 1
    health_check     = "task_states"
    min_healthy_time = "30s"
  }

  group "springer-website" {
    count = 1

    network {
      port "http" {
        static       = 3002
        to           = 3000
        host_network = "private"
      }
    }

    service {
      name = "springer-website"
      tags = ["apps", "logs.promtail"]
      port = "http"
    }

    constraint {
      attribute = "${attr.unique.hostname}"
      value     = "Worker-08"
    }

    task "acumen-springer" {
      driver = "docker"

      config {
        image       = "h4rb0r.acm.acumen-strategy.com/acumen-fe/springer:IMAGE_TAG_PLACEHOLDER"
        ports       = ["http"]
        dns_servers = ["172.17.0.1", "8.8.8.8", "8.8.4.4", "1.1.1.1"]
      }

      resources {
        cpu    = 200
        memory = 200
      }
    }
  }
}