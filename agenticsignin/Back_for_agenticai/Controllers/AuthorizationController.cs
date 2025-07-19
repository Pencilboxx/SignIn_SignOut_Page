using Back_for_agenticai.Models;
using Back_for_agenticai.Services;
using Microsoft.AspNetCore.Mvc;
using BCrypt.Net;
using Microsoft.EntityFrameworkCore;

namespace Back_for_agenticai.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthorizationController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly AuthorizationService _authorizationservice;

        public AuthorizationController(AppDbContext context, AuthorizationService authorizationservice)
        {
            _context = context;
            _authorizationservice = authorizationservice;
        }

        [HttpPost("signup")]
        public async Task<IActionResult> SignUp(User user)
        {
            if (await _context.Users.AnyAsync(u => u.EmailID == user.EmailID))
                return BadRequest(new { message = "User already exists." });

            user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(user.PasswordHash);
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return Ok(new { message = "User registered successfully." });
        }

        [HttpPost("signin")]
        public async Task<IActionResult> SignIn(User login)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.EmailID == login.EmailID);
            if (user == null || !BCrypt.Net.BCrypt.Verify(login.PasswordHash, user.PasswordHash))
                return Unauthorized(new { message = "Invalid credentials." });

            //For JWT token generation 
            //var token = _authorizationservice.GenerateJwtToken(user);
            //return Ok(new { token });
            return Ok(new { message = "Sign in successful!!" });
        }
    }
}
