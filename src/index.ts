import { tweets } from "./database/Tweet.db";
import { users } from "./database/Users.db";
import { Tweet, User } from "./model";

const user1 = new User("RafaelHenkel", "rafael@gmail.com", "1234567a");
const user2 = new User("Rafael", "rafael234@gmail.com", "1234567a123");
const user3 = new User(
  "Rafaelllllllllllllllllll",
  "rafaelllllllll234@gmail.com",
  "1234567a123llll"
);

const tweet1 = new Tweet("tweet de rafaelHenkel", "RafaelHenkel", "Tweet");
const tweet2 = new Tweet("tweet de rafael", "RafaelHenkel", "Tweet");
const tweet3 = new Tweet("ola!", "RafaelHenkel", "Tweet");

//enviar os tweets do usuario
user1.sendTweet(tweet1);
user1.sendTweet(tweet2);
user1.sendTweet(tweet3);

//seguir outros usuarios
user1.follow(user2);
user2.follow(user2);
user3.follow(user2);

//postar tweets no banco de dados
tweet1.tweetPost();
tweet2.tweetPost();
tweet3.tweetPost();

//replyes de tweets
tweet1.reply("reply show de bola", "RafaelHenkel");

//curtir tweets
tweet1.like(user2);
tweet1.like(user1);
tweet1.like(user3);

user1.showTweets();
