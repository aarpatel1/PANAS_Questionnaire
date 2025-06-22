# PANAS Questionnaire
Google Apps Script Web App

This project implements the **Positive and Negative Affect Schedule (PANAS)** as a web-based tool using Google Apps Script. It collects users' responses to 20 emotions, computes their Positive and Negative scores, stores the data in a Google Sheet, and displays a personalized result category.

---

## 📦 Features

- ✅ 20-question PANAS form rendered dynamically
- ✅ Categorization into: Cheerleader, Poet, Mad Scientist, or Judge
- ✅ Data saved to a linked Google Sheet
- ✅ Duplicate protection via email detection
- ✅ Personalized result display with clean UI
- ✅ Web App deployable via Google Apps Script

---

## 🚀 How It Works

1. User fills out the PANAS form
2. Scores are calculated (positive and negative affect)
3. A category is assigned based on thresholds
4. Result is displayed on a new page
5. Response is saved in a Google Sheet

---

## 🛠 Setup Instructions

### 1. Create a New Apps Script Project

- Visit [Google Apps Script](https://script.google.com)
- Create a new project

### 2. Add These Project Files

Upload or paste in:

| File | Purpose |
|------|---------|
| `Code.gs` | Handles form submission, storage, and routing |
| `index.html` | PANAS questionnaire form UI |
| `results.html` | Personalized results page |
| `appsscript.json` | Project settings (see below) |

### 3. Connect a Google Sheet

- Create a Google Sheet named however you like
- Add a sheet named **`Sheet1`**
- In row 1, add these headers:

Name | Email | Interested | Distressed | Excited | Upset | Strong | Guilty | Alert | Scared | Enthusiastic | Hostile | Proud | Irritable | Inspired | Ashamed | Determined | Nervous | Attentive | Jittery | Active | Afraid | PositiveScore | NegativeScore | Category


### 4. Deploy as Web App

1. Click **Deploy > Manage Deployments**
2. Choose **"Web App"**
3. Set:
   - **Execute as:** Me
   - **Who has access:** Anyone with the link
4. Click **Deploy**
5. Copy the **Web App URL** — it will look like:  

https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec


6. In `index.html`, find this line:

```js
const baseUrl = "YOUR_DEPLOYED_WEBAPP_URL_HERE";

And replace it with your actual URL
