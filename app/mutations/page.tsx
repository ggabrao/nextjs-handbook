export default function MutationsPage() {
  return (
    <main className="lg:text-lg">
      <div className="flex flex-col pt-4">
        <h2 className="text-lg text-center font-semibold mb-2 sm:text-left lg:text-2xl lg:mb-5">Mutations</h2>
      </div>
    </main>
  );
}

/*
MUTATING 0 React Server Actions
- allow you to run asynchronous code directly on the server.
- eliminate the need of API entpoints to mutate data.
- can be invoked from Client or Server Components.
- The 'action' attribute in the < form > element is used to invoke actions.The action will automatically receive the native FormData object, containing the captured data.

## Benefits:
- Users can INTERACT with the form and SUBMIT data even if the JavaScript for the form hasn't been loaded yet or if it fails to load.
  - Deeply integrated with Next.js caching, allowing revaliations

## Steps:
1. Create the actions in a separate file on / lib(actions.ts)
2. Invoke the actions from the forms, using the action attribute

## Process inside a server action:

1. Extract the data from the formData object, with methods like:
-get(name)
  - entries() with Javascript's Object.fromEntries() - on forms that have many fields

2. Ensure Type Validation and Coercion: manually or with a lib(ex: Zod)

3. Insert data into the database and handle errors

4. Revalidate: after updating the data displayed in a route, you need to clear the Next.js client - side router cache and trigger a new request to the server to fetch fresh data.It can be done with revalidatePath()
    
5. Redirect


VALIDATIONS 0 Server - Side validation(Next.js Recommendation)

# OBS: Achei que a abordagem mostrada no exemplo ficou incompleta:
* Os campos já preenchidos são zerados quando existem validation errors.
* As validations só se ativam ao dar submit.
* Não sei o porquê.Talvez isso só possa ser feito com validação no client side também

# Benefits:
- Ensure your data is in the expected format BEFORE sending it to your database.
- Reduce the risk of malicious users bypassing client - side validation
  - Have one source of truth for what is considered VALID data.


    ERRORS 0

# Specific Actions Errors
Add try/catch inside each of the Server Actions

# Unexpected Errors
Add an error.tsx file to define a UI boundary for the route segment, allowing to catch UNEXPECTED ERRORS and display a FALLBACK UI
Test error page: http://localhost:3000/dashboard/invoices/2e94d1ed-d220-449f-9f11-f0bbceed9645000000000000000000/edit

# Not Found
To display a more specific FALLBACK UI for errors that happen when a resource does not exist,
  replacing the error.tsx FALLBACK UI that would appear

1. Create the not - found.tsx file
2. Invoke the function notFound()  

Test 404 page: http://localhost:3000/dashboard/invoices/2e94d1ed-d220-449f-9f11-f0bbceed9645/edit

*/