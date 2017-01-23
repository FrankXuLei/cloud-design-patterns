---
title: Cloud Design Patterns
description: Cloud Design Patterns for Microsoft Azure
keywords: Azure
author: bennage
manager: marksou
ms.date: 12/14/2016
ms.topic: article
---

# Cloud Design Patterns

[!INCLUDE [header](./_includes/header.md)]

These design patterns are useful for building reliable, scalable, secure applications in the cloud.

Each pattern describes the problem that the pattern addresses, considerations for applying the pattern, and an example based on Microsoft Azure. Most of the patterns include code samples or snippets that show how to implement the pattern on Azure. However, most of the patterns are relevant to any distributed system, whether hosted on Azure or on other cloud platforms.

| Pattern | Description |
| ------- | ----------- |
| [Cache-Aside](cache-aside.md) | Load data on demand into a cache from a data store |
| [Circuit Breaker](circuit-breaker.md) | Handle faults that might take a variable amount of time to fix when connecting to a remote service or resource. |
| [CQRS](command-and-query-responsibility-segregation-cqrs.md) | Segregate operations that read data from operations that update data by using separate interfaces. |
| [Compensating Transaction](compensating-transaction.md) | Undo the work performed by a series of steps, which together define an eventually consistent operation. |
| [Competing Consumers](competing-consumers.md) | Enable multiple concurrent consumers to process messages received on the same messaging channel. |
| [Compute Resource Consolidation](compute-resource-consolidation.md) | Consolidate multiple tasks or operations into a single computational unit |
| [Event Sourcing](event-sourcing.md) | Use an append-only store to record the full series of events that describe actions taken on data in a domain. |
| [External Configuration Store](external-configuration-store.md) | Move configuration information out of the application deployment package to a centralized location. |
| [Federated Identity](federated-identity.md) | Delegate authentication to an external identity provider. |
| [Gatekeeper](gatekeeper.md) | Protect applications and services by using a dedicated host instance that acts as a broker between clients and the application or service, validates and sanitizes requests, and passes requests and data between them. |
| [Health Endpoint Monitoring](health-endpoint-monitoring.md) | Implement functional checks in an application that external tools can access through exposed endpoints at regular intervals. |
| [Index Table](index-table.md) | Create indexes over the fields in data stores that are frequently referenced by queries. |
| [Cloud Design Patterns](index.liquid.md) | Cloud Design Patterns for Microsoft Azure |
| [Cloud Design Patterns](index.md) | Cloud Design Patterns for Microsoft Azure |
| [Leader Election](leader-election.md) | Coordinate the actions performed by a collection of collaborating task instances in a distributed application by electing one instance as the leader that assumes responsibility for managing the other instances. |
| [Materialized View](materialized-view.md) | Generate prepopulated views over the data in one or more data stores when the data isn't ideally formatted for required query operations. |
| [Pipes and Filters](pipes-and-filters.md) | Break down a task that performs complex processing into a series of separate elements that can be reused. |
| [Priority Queue](priority-queue.md) | Prioritize requests sent to services so that requests with a higher priority are received and processed more quickly than those with a lower priority. |
| [Queue-Based Load Leveling](queue-based-load-leveling.md) | Use a queue that acts as a buffer between a task and a service that it invokes in order to smooth intermittent heavy loads. |
| [Retry](retry.md) | Enable an application to handle anticipated, temporary failures when it tries to connect to a service or network resource by transparently retrying an operation that's previously failed. |
| [Runtime Reconfiguration](runtime-reconfiguration.md) | Design an application so that it can be reconfigured without requiring redeployment or restarting the application. |
| [Scheduler Agent Supervisor](scheduler-agent-supervisor.md) | Coordinate a set of actions across a distributed set of services and other remote resources. |
| [Sharding](sharding.md) | Divide a data store into a set of horizontal partitions or shards. |
| [Static Content Hosting](static-content-hosting.md) | Deploy static content to a cloud-based storage service that can deliver them directly to the client. |
| [Throttling](throttling.md) | Control the consumption of resources used by an instance of an application, an individual tenant, or an entire service. |
| [Valet Key](valet-key.md) | Use a token or key that provides clients with restricted direct access to a specific resource or service. |