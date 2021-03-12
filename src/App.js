import React from "react";

function App() {
  const [status, setStatus] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: event.target[0].value }),
    };
    setStatus("Loading");
    fetch("http://127.0.0.1:8000/api/subscribe-create/", requestOptions).then(
      (response) => {
        if (response.ok) {
          setStatus("Success");
          return response.json();
        } else {
          setStatus("Error");
        }
      }
    );
  }

  return (
    <section className="App h-screen w-full flex justify-center items-center bg-green-500">
      <div class="bg-white rounded-lg">
        <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Want more News ?
            <br class="hidden sm:inline" />
            <span class="text-indigo-600">Sign up for My newsletter.</span>
          </h2>
          <form class="mt-8 sm:flex" onSubmit={handleSubmit}>
            <input
              aria-label="Email address"
              type="email"
              required
              class="appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs"
              placeholder="Enter your email"
            />
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              {status ? (
                <div class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                  {status}
                </div>
              ) : (
                <button class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                  Subscribe
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default App;
