using EnvironmentSystem.Models.Data.Structures;
using EnvironmentSystem.Interfaces;
namespace EnvironmentSystem.Models.Objects
{
    public class Snowflake : MovingObject
    {
        protected const char SnowflakeCharImage = '*';

        public Snowflake(int x, int y, int width, int height, Point direction)
            : base(x, y, width, height, direction)
        {
            this.ImageProfile = this.GenerateImageProfile();
        }

        protected virtual char[,] GenerateImageProfile()
        {
            return new char[,] { { SnowflakeCharImage } };
        }

        public override void RespondToCollision(CollisionInfo collisionInfo)
        {
            this.Exists = false;
        }
    }
}
