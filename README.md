# Ghibli Users API

The **Ghibli Users API** is a RESTful API built with Node.js, Express, and MySQL (via JawsDB). It allows you to manage users and fetch data from the Studio Ghibli API based on the user's role. Each user has a role that determines which Ghibli data they can access (e.g., films, people, locations, etc.).

---

## Features

- **User Management:**
  - Create, read, update, and delete users.
  - Each user has a unique ID, name, email, and role.
- **Role-Based Ghibli Data Access:**
  - Users can access Studio Ghibli API data based on their role.
  - Supported roles: `admin`, `films`, `people`, `locations`, `species`, `vehicles`.
- **Scalable and Secure:**
  - Built with best practices for scalability and security.
  - Uses environment variables for sensitive data.

---

## Installation

### Prerequisites

- Node.js (v18 or higher)
- MySQL database (e.g., JawsDB)
- Studio Ghibli API access (public, no API key required)

### Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/ghibli-users-api.git
   cd ghibli-users-api

2. **Install Dependencies**
    ```bash
    npm install

3. **Set Up the Database**
  - Create a MySQL database (JawsDB)
- Run the following SQL query to create the users table
    ```bash
    CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    role ENUM('admin', 'films', 'people', 'locations', 'species', 'vehicles') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

4. **Configure Environment Variables**
 - Create a .env file in the root directory:
    ```bash
    PORT=3000
    DB_HOST=your_jawsdb_host
    DB_USER=your_jawsdb_user
    DB_PASSWORD=your_jawsdb_password
    DB_NAME=your_jawsdb_database

5. **Run the Application**
  - Start the server in development mode:
    ```bash
    npm run dev

  - Start the server in production mode:
    ```bash
    npm run dev

**API Endpoints**
Users

| Method | Endpoint          | Description               |
| ------ | ----------------- | ------------------------- |
| POST   | /api/users        | Create a new user.        |
| GET    | /api/users        | Get all users.            |
| GET    | /api/users/:id    | Get a specific user by ID.|
| PUT    | /api/users/:id    | Update a user by ID.      |
| DELETE | /api/users/:id    | Delete a user by ID.      |

**Example Requests**
- Request:
    ```bash
    POST /api/users
    Content-Type: application/json

    {
    "name": "David Mondragon",
    "email": "dragon18saiz@gmail.com",
    "role": "films"
    }
- Response:
    ```bash
    {
    "id": 1,
    "name": "David Mondragon",
    "email": "dragon18saiz@gmail.com",
    "role": "films"
    }

**Get a User with Ghibli Data**

- Request:
    ```bash
    GET /api/users/1
- Response 
    ```bash
    {
    "id": 1,
    "name": "David Mondragon",
    "email": "dragon18saiz@gmail.com",
    "role": "films",
    "ghibliData": "ghibliData": [
        {
            "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
            "title": "Castle in the Sky",
            "original_title": "天空の城ラピュタ",
            "original_title_romanised": "Tenkū no shiro Rapyuta",
            "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
            "movie_banner": "https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg",
            "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
            "director": "Hayao Miyazaki",
            "producer": "Isao Takahata",
            "release_date": "1986",
            "running_time": "124",
            "rt_score": "95",
            "people": [
                "https://ghibliapi.vercel.app/people/598f7048-74ff-41e0-92ef-87dc1ad980a9",
                "https://ghibliapi.vercel.app/people/fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
                "https://ghibliapi.vercel.app/people/3bc0b41e-3569-4d20-ae73-2da329bf0786",
                "https://ghibliapi.vercel.app/people/40c005ce-3725-4f15-8409-3e1b1b14b583",
                "https://ghibliapi.vercel.app/people/5c83c12a-62d5-4e92-8672-33ac76ae1fa0",
                "https://ghibliapi.vercel.app/people/e08880d0-6938-44f3-b179-81947e7873fc",
                "https://ghibliapi.vercel.app/people/2a1dad70-802a-459d-8cc2-4ebd8821248b"
            ],
            "species": [
                "https://ghibliapi.vercel.app/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"
            ],
            "locations": [
                "https://ghibliapi.vercel.app/locations/"
            ],
            "vehicles": [
                "https://ghibliapi.vercel.app/vehicles/4e09b023-f650-4747-9ab9-eacf14540cfb"
            ],
            "url": "https://ghibliapi.vercel.app/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
        },
    ]


## Technologies Used

### Backend:
- Node.js
- Express
- MySQL (via JawsDB)

### External API:
- Studio Ghibli API (https://ghibliapi.vercel.app)

### Development Tools:
- Nodemon (for development)
- Postman (for API testing)
    

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## Contact

For questions or feedback, please contact:

**David Mondragon**

- **Email:** dragon18saiz@gmail.com
- **GitHub:** [mondragonSaiz](https://github.com/mondragonSaiz)
