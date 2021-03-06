import React from "react";



const APIKeyForm = ({ setApiKey }) => {
  const submitHandler = (event) => {
    const { apiKey } = event.target;

    setApiKey(apiKey.value);
  };

  return (
    <form
      className="px-4 h-3/5 flex justify-center flex-col lg:max-w-screen-md m-auto"
      onSubmit={submitHandler}
    >
      <input
        type="text"
        placeholder="api key"
        className="border active:border-livepeer p-2 w-full rounded"
        name="apiKey"
      />
      {/* <label className="text-sm text-gray-400 text-right">
        Press <strong>Enter</strong> to submit
      </label> */}
      {/* <div className="py-6 text-sm text-gray-800">
        Find out how to get your API key{" "}
        <a
          href="https://livepeer.com/docs/guides/api-keys/create-an-api-key"
          className="text-blue-500 underline"
        >
          here
        </a>
      </div> */}
    </form>
  );
};

export default APIKeyForm;
