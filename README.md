# UpRaised-Quiz-App
This project is a quiz web application built using React that allows users to start a quiz, answer questions, and receive a final score. The app follows a RESTful design pattern for interacting with APIs, supporting features such as starting a quiz, submitting responses, and receiving quiz data.

# Features
Allows users to start a new quiz.
Presents a series of questions to the user, supports multiple choice answers.
Displays the final score after all questions are answered.
REST API Consumption: Interacts with APIs for fetching and submitting quiz data; and a lot to add in future.
Screens
Home Screen
Users click on the Start button to begin a new quiz.
An API request is made to start the quiz and retrieve the first set of questions.
Question Screen
Displays questions one at a time.
Users can select single or multiple correct answers.
The time taken for each question is recorded and included in the API request payload.
Final Score Screen
After the last question, an API request is made to submit the responses.
The final score is calculated in an interesting way and displayed.
# Technologies Used
Frontend: React.js for building the user interface.
API: Consumes RESTful APIs for quiz functionality.
Optional: You may use Next.js for server-side rendering and API mocking.
# How to Run the Project
Clone this repository:

bash
Copy code<br>
git clone https://github.com/Chakradhar-Malage/Upraised-Quiz-App.git
Navigate into the project directory:

bash
Copy code<br>
cd quiz-web-app
Install dependencies:

bash
Copy code<br>
npm install
Start the development server:


Copy code<br>
npm start
Open the app in your browser at http://localhost:3000.<br>

API Endpoints
Start Quiz: POST /api/quiz/start
Triggers the start of a new quiz and fetches the first question.
Submit Response: POST /api/quiz/submit
Submits user-selected answers along with the time taken per question.
Complete Quiz: POST /api/quiz/complete
Submits the final set of answers and returns the quiz score.
REST API Design
This project follows REST guidelines for structuring API requests and responses, including appropriate use of HTTP methods (POST) and response status codes.

API Request Example
json
Copy code
{
  "questionId": 1,
  "selectedOptions": [2, 4],
  "timeTaken": "15s"
}
Deployment
For demonstration purposes, the app can be deployed using platforms like Vercel or Netlify.

Best Practices
Clean and maintainable code with comments explaining key sections.
Follows RESTful principles for handling API requests and responses.
All components are modular and reusable.
Bonus Features (If Time Permits)
Production-ready with error logging and exception handling.
Dockerized for containerization and easier deployment.
Contributing
Feel free to fork this project and submit pull requests. All contributions are welcome.
