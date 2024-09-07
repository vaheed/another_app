# Simple Web App HA

A simple Node.js web application designed for testing High Availability (HA) in load balancer configurations. It displays a greeting message along with the server's IP address, making it easy to verify load distribution.

## Project Structure

- `app.js`: Main application file containing the Express server setup and routes.
- `Dockerfile`: Instructions for building the Docker image of the application.
- `package.json`: Node.js project configuration and dependencies.
- `.github/workflows/deploy.yml`: GitHub Actions workflow for continuous deployment.
- `k8s/deployment.yaml`: Kubernetes deployment configuration.

## Features

- Displays a greeting message with the server's IP address, useful for load balancer testing.
- Includes a health check endpoint at `/health` for load balancer health probes.
- Containerized using Docker for easy deployment and scaling.
- Configured for deployment to Kubernetes, ideal for testing HA setups.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd simple_web_app_ha
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the application locally:
   ```
   npm start
   ```

4. Access the application at `http://localhost:3000`

## Docker Build

To build and run the Docker image:

1. Build the image:
   ```
   docker build -t simple_web_app_ha .
   ```

2. Run the container:
   ```
   docker run -p 3000:3000 simple_web_app_ha
   ```

## Deployment

The application is set up for continuous deployment to Kubernetes using GitHub Actions. Push to the `main` branch to trigger the deployment process. This setup allows for easy testing of load balancer HA configurations.

## Environment Variables

- `PORT`: (Optional) Port number for the application to listen on. Defaults to 3000.

## Testing Load Balancer HA

1. Deploy multiple instances of this application behind a load balancer.
2. Access the application through the load balancer's endpoint.
3. Refresh the page multiple times to verify that requests are distributed across different instances (you'll see different IP addresses).
4. Use the `/health` endpoint to test load balancer health check configurations.

## Contributing

Please read the CONTRIBUTING.md file for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.