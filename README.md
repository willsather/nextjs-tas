# Next.js TAS

This repository contains some Next.js applications that can be deployed to Tanzu Application Service (TAS) using Cloud
Foundry. Each application has a `manifest.yml` which contains the instructions which specify deployment details.

## Static

This application is a Single Page Application (SPA) that is deployed statically using the static buildpack.

## Server

This application utilizes Next.js server rendered components to dynamically renders pages, which is deployed using the
Node.js buildpack.f