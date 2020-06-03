using Microsoft.EntityFrameworkCore.Migrations;

namespace MessageBoard.Migrations
{
    public partial class UpdateMessagesTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MessageValue",
                table: "Message");

            migrationBuilder.AddColumn<string>(
                name: "Value",
                table: "Message",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Value",
                table: "Message");

            migrationBuilder.AddColumn<string>(
                name: "MessageValue",
                table: "Message",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
