import { ErrorBoundary } from "react-error-boundary";
import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";
import { Outlet } from "react-router";

function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h2 className="text-2xl font-semibold text-red-600 mb-2">
        Something went wrong.
      </h2>
      <p className="text-gray-600 mb-4">
        We couldn’t load this section. Please try again.
      </p>
      {error && (
        <pre className="bg-gray-100 text-red-500 text-sm p-3 rounded max-w-lg overflow-auto mb-4">
          {error.message}
        </pre>
      )}
      <button
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Try Again
      </button>
    </div>
  );
}

export default function AppLayout() {
  return (
    <>
      <Header />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // Optional: refresh page or reset state
          window.location.reload();
        }}
      >
        <main className="flex min-h-[60vh] flex-col items-center justify-center">
          <Outlet />
        </main>
      </ErrorBoundary>
      <Footer />
    </>
  );
}
