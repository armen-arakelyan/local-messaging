import React, {Suspense} from 'react';
import { QueryClientProvider } from 'react-query';
import queryClient from './queryClient';
import MessageContainer from './components/MessageContainer';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ErrorBoundary fallback={<div>Error loading app</div>}>
                <Suspense fallback={<div>Loading...</div>}>
                    <MessageContainer />
                </Suspense>
            </ErrorBoundary>
        </QueryClientProvider>
    );
};

export default App;
