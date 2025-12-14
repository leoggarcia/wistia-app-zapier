# Wistia Integration for Zapier

This project is a Zapier integration for the Wistia API, developed using the Zapier CLI. It allows users to connect their Wistia account to other applications in the Zapier ecosystem.

## API Overview and Supported Use Cases

[Wistia](https://wistia.com/) is a video hosting platform for businesses. This integration leverages the Wistia API to automate video-related workflows.

The following use cases are supported:

-   **Trigger: New Video Uploaded**: Triggers a Zap when a new video is added to your Wistia account. This allows you to start workflows like sending a notification to Slack, updating a spreadsheet, or creating a task in a project management tool.
-   **Action: Upload Video**: Allows you to upload a video to a specific project in your Wistia account from a public URL. This is useful for automating the process of adding content to your Wistia library from other sources.
-   **Action: Update Video**: Updates an existing video in your Wistia account. This can be used to change video metadata like its name, description, or associated project.
    **Action: Delete Video**: Deletes a video from your Wistia account.      
-   **Search: Find a Video**: Finds a video in your Wistia account by its name or a partial match. This is useful for finding a video to use in a later step of a Zap.

## Tradeoffs

During the development of this integration, some design decisions were made:

1.  **Polling for Triggers**: The "New Video Uploaded" trigger uses a polling mechanism, meaning Zapier will check for new videos periodically. This approach was chosen specifically to explore and implement Zapier's polling functionality. The tradeoff is that the trigger is not instantaneous; there can be a delay between the video upload and the Zap execution. The alternative would be to use Wistia's webhooks for real-time notifications, which would require a different architecture (e.g., a dedicated endpoint to receive webhook events).

2.  **URL-Based Video Uploads**: The "Upload Video" action requires a public URL for the video file instead of supporting direct file uploads. This simplifies the integration by leveraging Wistia's Upload API, which is optimized for this method, and avoids the complexity of handling multipart file streams within Zapier.

## Assumptions

The integration was built with the following assumptions:

-   **User-Provided API Key**: It is assumed that the user will generate an API key from their Wistia account with the necessary permissions. Wistia's interface allows for the configuration of these permissions upon key creation.
-   **Zapier Platform's Polling Mechanism**: The trigger relies on the Zapier platform to handle the polling schedule and deduplication of incoming data. The integration's responsibility is simply to provide a correctly sorted list of recent videos, and Zapier manages the rest.

## Future Enhancements

The following are ideas for future enhancements to this integration:

-   **Search or Create Action**: Implement a `searchOrCreate` action that would first search for a video by a unique identifier (like its name or URL) and, if it doesn't exist, would create it. This would prevent the creation of duplicate videos.
-   **Captions Management**: Implement actions to manage video captions, potentially including AI-powered caption generation (e.g., using other Zapier tools like OpenAI) and association with Wistia videos.

## AI Tool Usage

Several AI tools were leveraged during the development of this project to assist with ideation, code generation, and documentation.

### ChatGPT

-   **How it was applied**: Used for brainstorming initial ideas for triggers and actions, and for generating boilerplate code for tests. It also helped clarify how to use variables within the `connectionLabel` to improve authentication description.

-   **Example Prompts**:
    -   *"What are some common Zapier triggers and actions for a video platform like Wistia?"*
    -   *"Generate a test file using the Zapier testing framework for a 'create' action that uploads a video from a URL."*
    -   *"How can I dynamically set the `connectionLabel` in Zapier authentication to display user-specific information?"*

## How to Run the Project

To get this project running locally for development or testing, follow these steps:

1.  **Install Dependencies**: Make sure you have Node.js installed. Then, navigate to the project directory and install the required packages:

    ```bash

    npm install

    ```

2.  **Run Tests**: The project uses `jest` for testing. To execute the test suite, run the following command:

    ```bash

    npm test

    ```

    This will run all the tests and provide a report on their status.