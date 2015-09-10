#Gaming-Boardz

---

Gamer boards for gaming stats accross as many platforms as I can.

Do you have a friend that plays a certain game on another system than you? Have you ever wanted to see how they stack up to you? Gaming boardz is a way to see your stats accross multiple platforms to see who really is the best between you, your friends, possibly the world.

Access your XBOX Live account and pull up your games played along side your achievements and stats for that game.

Access your PSN account to compare your stats with your XBOX friends.

Is there a Steam API? Heck yeah there is!(And hopefully it works)

---

#Install

---

#Getting Started

---

#MVP

---

#User Stories

---

#Icebox

---

#Future Steps

---

[Trello Board](https://trello.com/b/4O9Ylg4f/gaming-boardz)

notes for api //
$.ajax({
         url: "https://xboxapi.com/v2/xuid/RANDoMenace",
         data: { signature: 'X-AUTH' },
         type: "GET",
         beforeSend: function(xhr){xhr.setRequestHeader('X-AUTH', '46a8aa7dcf9872e5e8f273546d9eb17060ac8a26');},
         success: function(data) {console.log(data); }
      });

