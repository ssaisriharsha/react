export default function App() {
  const signUp = (formData) => {
    console.log(formData.get("email"));
    console.log(formData.get("password"));
  }
  return(
    <>
      <h1>Signup form</h1>
      <form action={signUp} >
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" placeholder="Email" aria-label="Email" id="email" autoComplete="true"/>
        <br />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" placeholder="Password" aria-label="password" id="password" autoComplete="true" />
        <button>Submit</button>
      </form>
    </>
  )
}