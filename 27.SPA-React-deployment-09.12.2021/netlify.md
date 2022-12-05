# A Step-by-Step Guide: Deploying on Netlify

This read-me file will guide you step by step to host a static website on Netlify, including
setting up continuous deployment.

<br />

## There are two ways to deploy an application on netlify:

<br />

## Manual deployment:

<br />

### 1. Build your application using the following command

    npm run build

<br />

### 2. Open your app with files explorer

<br />

### 3. Drag your `build` folder and drop it into the manual deployment box on netlifys web-page

<br />

![manual deployment box](./img/netlify/9-manual.png)

<br />

<br />

## Continuous deployment:

<br />

Using this approach, your changes on the code will be reflected on the deployed version

<br />

### 1. Import an existing project from Github

<br />

![import](./img/netlify/1-import.png)

<br />

### 2. Connect to git provider `Github`

<br />

![Connect to git provider](./img/netlify/2-connect.png)

<br />

### 3. Authorize Netlify to access your Github

<br />

![Authorization](./img/netlify/3-auth.png)

### 4. Select a repository form Github

<br />

![Select a repository form Github](./img/netlify/4-search.png)

<br />

### 5. Site is ready to deploy, click on the green button `Deploy Site`

<br />

![Deploy Site](./img/netlify/5-deploy.png)

<br />

<br />

## After your app is deployed, you can edit the name of the app in the URL by:

### 1. Clicking on `Domain settings`

<br />

![Domain settings](./img/netlify/6-change.png)

<br />

### 2. Clicking on `Options` and select `Edit site name`

<br />

![Edit site name](./img/netlify/7-edit.png)

<br />

### 2. Change the name and hit `Save`

<br />

![Save](./img/netlify/8-save.png)

<br />

#### Custom domains requires a paid account

### [Learn more about Netlify](https://agilitycms.com/resources/posts/what-is-netlify-and-why-should-you-care-as-an-editor)
