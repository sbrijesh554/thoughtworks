import React from 'react';
import ReactDOM from 'react-dom';
import StudentData from './component/StudentData';
import ErrorBoundary from './component/ErrorBoundary';

ReactDOM.render(
<ErrorBoundary>
    <StudentData>
    </StudentData>
</ErrorBoundary>,
document.getElementById("container"));