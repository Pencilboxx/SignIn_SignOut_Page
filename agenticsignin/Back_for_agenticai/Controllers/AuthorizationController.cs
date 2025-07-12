using Back_for_agenticai.Models;
using Back_for_agenticai.Services;
using Microsoft.AspNetCore.Mvc;
using BCrypt.Net;

namespace Back_for_agenticai.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthorizationController : ControllerBase
    {
        private readonly List<User> _users;
        private readonly AuthorizationService _authorizationservice;

        public AuthorizationController(List<User> users, AuthorizationService authorizationservice)
        {
            _users = users;
            _authorizationservice = authorizationservice;
        }

        [HttpPost("signup")]
        public IActionResult SignUp(User user)
        {
            if (_users.Any(u => u.EmailID == user.EmailID))
                return BadRequest(new { message = "User already exists." });

            user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(user.PasswordHash);
            _users.Add(user);
            return Ok(new { message = "User registered successfully." });
        }

        [HttpPost("signin")]
        public IActionResult SignIn(User login)
        {
            var user = _users.FirstOrDefault(u => u.EmailID == login.EmailID);
            if (user == null || !BCrypt.Net.BCrypt.Verify(login.PasswordHash, user.PasswordHash))
                return Unauthorized(new { message = "Invalid credentials." });

            var token = _authorizationservice.GenerateJwtToken(user);
            return Ok(new { token });
        }
    }
}
