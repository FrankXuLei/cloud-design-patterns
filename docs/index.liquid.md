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

| Category | Description |
| -------- | ----------- |
{%- for category in categories %}
| [{{ category.title }}](./category/{{ category.url }}/index.md) ![{{ category.title }}](./_images/category/{{ category.url }}.svg) | {{ category.description }} |
{%- endfor %}

| Pattern | Description |
| ------- | ----------- |
{%- for pattern in patterns %}
| [{{ pattern.title }}](./{{ pattern.file }}) | {{ pattern.description }} |
{%- endfor %}