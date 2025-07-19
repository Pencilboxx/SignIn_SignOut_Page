
namespace Back_for_agenticai.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; } = "";
        public string EmailID { get; set; } = "";
        public string PasswordHash { get; set; } = "";
    }

}