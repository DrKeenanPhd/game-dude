# Deploying to Render

## Prerequisites

1. A Render account (sign up at https://render.com if you don't have one)
2. Your project pushed to a GitHub repository

## Deployment Steps

### 1. Connect Your Repository to Render

1. Log in to your Render dashboard
2. Click on "New" and select "Blueprint" from the dropdown menu
3. Connect your GitHub account if you haven't already
4. Select the repository containing this project
5. Render will automatically detect the `render.yaml` file and configure your services

### 2. Configure Environment Variables

Before deploying, you need to set up the following environment variables in the Render dashboard:

- `API_KEY`: Your Game SDK API key
- `WEATHER_API_KEY`: Your Weather API key (if using weather features)
- `OPENAI_API_KEY`: Your OpenAI API key
- `botToken`: Your Telegram bot token (if using Telegram integration)- `PORT`: The port your application will run on (Render will set this automatically, but you can override it)
You can set these in the Render dashboard under the Environment section of your service.

### 3. Deploy

Click "Create Blueprint" and Render will automatically deploy your application.

### 4. Access Your Application

Once deployment is complete, you can access your application at the URL provided by Render.

## Troubleshooting

If you encounter any issues during deployment:

1. Check the build logs in the Render dashboard
2. Ensure all required environment variables are set correctly
3. Verify that your repository contains all necessary files

## Updating Your Deployment

Render automatically deploys new versions when you push changes to your repository. You can also manually trigger a deployment from the Render dashboard.