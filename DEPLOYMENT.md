# BILLO Website - Deployment Guide

## GitHub Pages Deployment (Free)

### Step 1: GitHub Account Banayein
1. https://github.com pe jayen
2. Sign Up karein (agar account nahi hai)
3. Email verify karein

### Step 2: Repository Banayein
1. GitHub pe login karein
2. "+" button click karein > "New repository"
3. Repository name: `billo-website`
4. Public select karein
5. "Create repository" click karein

### Step 3: Code Upload Karein
Terminal mein ye commands run karein:

```bash
cd D:\projects\thegiftoy\website

git remote add origin https://github.com/YOUR_USERNAME/billo-website.git

git branch -M main

git push -u origin main
```

**Note:** `YOUR_USERNAME` ki jagah apna GitHub username dalein.

### Step 4: GitHub Pages Enable Karein
1. Repository kholein
2. Settings tab mein jayen
3. Left sidebar mein "Pages" click karein
4. Source mein "main" branch select karein
5. Folder mein "/ (root)" select karein
6. "Save" click karein

### Step 5: Website Live!
- 2-5 minute wait karein
- URL milega: `https://YOUR_USERNAME.github.io/billo-website/`

---

## Netlify Deployment (Free + Custom Domain)

### Step 1: Netlify Account Banayein
1. https://netlify.com pe jayen
2. Sign Up with GitHub karein

### Step 2: New Site Banayein
1. "Add new site" > "Import an existing project"
2. GitHub select karein
3. `billo-website` repository select karein
4. "Deploy site" click karein

### Step 3: Website Live!
- 1-2 minute wait karein
- Auto-generated URL milega
- Custom domain add kar sakte hain (optional)

---

## Custom Domain Setup (Optional)

### Step 1: Domain Buy Karein
- Namecheap: ~₨ 1,500/year
- GoDaddy: ~₨ 1,200/year
- Google Domains: ~₨ 1,000/year

### Step 2: DNS Settings
GitHub Pages ke liye:
1. Domain provider pe DNS settings jayen
2. A Record add karein:
   - Name: @ | Value: 185.199.108.153
   - Name: @ | Value: 185.199.109.153
   - Name: @ | Value: 185.199.110.153
   - Name: @ | Value: 185.199.111.153
3. CNAME Record add karein:
   - Name: www | Value: YOUR_USERNAME.github.io

### Step 3: GitHub mein Custom Domain
1. Repository Settings > Pages
2. Custom domain mein domain dalein
3. "Enforce HTTPS" check karein

---

## Testing Checklist

- [ ] Website mobile pe sahi dikh raha hai
- [ ] Links kaam kar rahe hain
- [ ] WhatsApp link sahi hai
- [ ] FAQ accordion kaam kar raha hai
- [ ] Scroll animations smooth hain
- [ ] Page speed achi hai (PageSpeed Insights se check karein)

---

## Support

Agar koi issue aaye toh WhatsApp karein:
+92 333 7948969