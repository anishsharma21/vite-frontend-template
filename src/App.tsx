import { SignedOut, SignInButton, SignUpButton, SignedIn, UserButton } from '@clerk/clerk-react';
import TodoList from './components/TodoList/TodoList'
import { LockIcon } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <h1 className="text-xl font-semibold tracking-tight">
            <span className="text-primary">Task</span>Master
          </h1>
          <div className="flex items-center gap-2">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 cursor-pointer">
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 cursor-pointer">
                  Sign up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-9 h-9"
                  }
                }}
              />
            </SignedIn>
          </div>
        </div>
      </header>

      <main className="flex-1 py-6 md:py-10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <SignedOut>
            <div className="text-center mb-8 max-w-md">
              <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight mb-2">
                Welcome to TaskMaster
              </h2>
              <p className="text-muted-foreground mb-6">
                Keep track of your tasks with ease. Sign in to save your progress across devices.
              </p>
            </div>
          </SignedOut>

          <SignedIn>
            <div className="w-full max-w-md mx-auto">
              <TodoList />
            </div>
          </SignedIn>
          <SignedOut>
            <div className="text-center bg-muted/30 rounded-lg p-6 border border-border shadow-sm w-full max-w-md">
              <div className="flex flex-col items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <LockIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Authentication Required</h3>
                  <p className="text-muted-foreground mb-4">
                    Please sign in to create and manage your tasks.
                  </p>
                </div>
                <div className="flex gap-2">
                  <SignInButton mode="modal">
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 cursor-pointer">
                      Sign in
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 cursor-pointer">
                      Create account
                    </button>
                  </SignUpButton>
                </div>
              </div>
            </div>
          </SignedOut>
        </div>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} TaskMaster. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with shadcn/ui + Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App;