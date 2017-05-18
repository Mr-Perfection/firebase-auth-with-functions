# firebase-auth-with-functions
I will be utilizing Google Cloud Functions for authentication via One-time password.

### Signup Using Functions
Check [One time password project](https://github.com/Mr-Perfection/one-time-password-react-native) to understand how I created [Functions](https://firebase.googleblog.com/2017/03/introducing-cloud-functions-for-firebase.html).

### Handling Asynchrous calls in ES7
```js
// There are multiple ways of handling Asynchronous processes
// 1. use callback functions
handleSubmit = () => {
  axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone }, function(err, response) {
    if (err) {
      console.log(err);
    } else {
      // ...
    }
    // ...
  });
}

// 2. use promise (cleaner)
handleSubmit = () => {
  axios.post(`${ROOT_URL}/createUser`, {
    phone: this.state.phone
  })
    .then(() => {
      axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone });
    })
    .catch((err) => {
      console.log(err);
    });
}

// 3. use async + await in ES7 (cleanest + beautiful)
handleSubmit = async () => {
  try {
    await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone });
    await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone });
  } catch(err) {
    console.log(err);
  }
}
```
