type LoggedInUser = {
  status: "logged_in";
  userId: number;
  email: string;
};

type GuestUser = {
  status: "guest";
  sessionId: string;
};

type User = LoggedInUser | GuestUser;


function isLoggedInUser(user : User) : user is LoggedInUser {
    return user.status == "logged_in";
}


function showDashboard(user: User) {
    if (isLoggedInUser(user)){
        console.log(`Welcome ${user.email}`);
        
    }else {
        console.log(`Welcome Guest`);
    }

}
