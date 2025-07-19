# SignInSignUp API

## Getting Started

### Prerequisites
- [.NET 8 SDK](https://dotnet.microsoft.com/download)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

### Setup

1. **Clone the repository:**
   
   git clone <your-repo-url>
   cd agenticaisignin/agenticsignin/Back_for_agenticai
   

2. **Configure the database:**
   - Update appsettings.json with your SQL Server connection string.

3. **Apply migrations and create the database:**
   
   dotnet tool install --global dotnet-ef
   dotnet ef migrations add InitialCreate
   dotnet ef database update
   

4. **Run the API:**
   
   dotnet run
   

5. **API Docs:**
   - Visit [http://localhost:5258/swagger](http://localhost:5258/swagger) for Swagger UI.

### Contributing

- Fork the repo and create a feature branch.
- Make your changes and submit a pull request.


## Command Lines

Clone: git clone <repo-url>
React app : npm start run
### Build the backend file first .
Install EF Core tools: dotnet tool install --global dotnet-ef
Add migration: dotnet ef migrations add <MigrationName>
Update database: dotnet ef database update
Run the backend: dotnet run

