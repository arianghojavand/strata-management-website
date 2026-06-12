# Strata Management Website

<p align="center">
  <img src="image_2026-06-12_233516100.png" alt="Strata Management Website Screenshot" width="800">
</p>

A responsive strata management web application built with **Next.js**, **React**, **Tailwind CSS**, **Supabase**, and **Google Sheets integration**. The site acts as a central digital hub for residents, owners, and building administrators to access strata information, submit enquiries, view resources, and manage owner related data.

## Overview

This project was designed to simplify communication between residents and the Owners Corporation. It provides public information pages, a resident enquiry form, an owner login flow, an admin portal, and a strata roll table connected to Supabase.

The website includes:

- A professional landing page for the strata management service
- Informational pages for About, Services, Contact, and Resources
- A contact form for maintenance and resident enquiries
- Google Sheets integration for enquiry storage and admin review
- Supabase authentication for owner login
- A Supabase powered strata roll table
- A PHP based levy calculation page for authenticated owners
- Vercel deployment configuration with Sydney region targeting

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 15 | Full stack React framework and routing |
| React 19 | Frontend UI components |
| Tailwind CSS | Styling and responsive layout |
| Supabase | Authentication, database, and storage links |
| Google Sheets Webhooks | Enquiry collection and admin reporting |
| PHP on Vercel | Levy calculation endpoint |
| Vercel | Deployment platform |

## Features

### Public Website

The public site contains pages for:

- **Home**: Introduces the strata management platform and its purpose.
- **About**: Explains the strata management service and focus on communication, transparency, and building operations.
- **Services**: Outlines support for maintenance, records, meetings, compliance, and property management.
- **Resources**: Links to strata documents and tenant resources hosted through Supabase storage.
- **Contact**: Displays contact details and includes a resident enquiry form.

### Resident Enquiry Form

Residents can submit issues through the contact page by entering:

- Name
- Lot or unit number
- Problem type
- Description

The form submits to `/api/submit-form`, which forwards the data to a Google Sheets webhook.

### Admin Portal

The admin portal at `/portal` provides a simple protected login flow using environment based admin credentials. After successful login, it fetches enquiry data from a Google Sheets read endpoint and displays the number of enquiries, along with an embedded Google Sheet view.

### Strata Roll

The `/strata_roll` page connects to Supabase and displays owner records from the `strata_roll` table. The table shows:

- Unit number
- Owner name
- Contact email
- Entitlement percentage

### Owner Login and Levy Details

The `/login` page uses Supabase email and password authentication. On successful login, the user email is stored in a cookie for one hour and the user is redirected to the PHP levy page.

The PHP endpoint at `/api/levy.php`:

- Checks that the user has logged in
- Looks up the owner by email in the Supabase `strata_roll` table
- Calls a Supabase RPC function to calculate total entitlement
- Calculates the owner's levy contribution based on their entitlement percentage

## Project Structure

```text
strata-management-website-main/
├── api/
│   ├── levy.php
│   └── test.php
├── public/
│   ├── about-us.jpg
│   ├── contact.jpg
│   ├── resources.jpg
│   ├── strata-landing.jpg
│   └── strata-management-act.pdf
├── src/
│   ├── app/
│   │   ├── about/page.js
│   │   ├── api/
│   │   │   ├── login/route.js
│   │   │   └── submit-form/route.js
│   │   ├── components/Navbar.js
│   │   ├── contact/page.js
│   │   ├── login/page.js
│   │   ├── portal/page.js
│   │   ├── resources_page/page.js
│   │   ├── services_page/page.js
│   │   ├── strata_roll/page.js
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   └── utils/
│       └── supabase.js
├── package.json
├── tailwind.config.js
└── vercel.json
