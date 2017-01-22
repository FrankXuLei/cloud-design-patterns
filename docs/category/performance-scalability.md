---
title: Performance and scalability patterns
description: 
keywords: design pattern
author: dragon119
manager: bennage

pnp.series.title: Cloud Design Patterns
---

# Performance and scalability

[!INCLUDE [header](../_includes/header.md)]

Performance is an indication of the responsiveness of a system to execute any action within a given time interval, while scalability is ability of a system either to handle increases in load without impact on performance or for the available resources to be readily increased. Cloud applications typically encounter variable workloads and peaks in activity. Predicting these, especially in a multi-tenant scenario, is almost impossible. Instead, applications should be able to scale out within limits to meet peaks in demand, and scale in when demand decreases. Scalability concerns not just compute instances, but other elements such as data storage, messaging infrastructure, and more.

The following patterns and guidance topics are related to maximizing performance and scalability in cloud-hosted applications.