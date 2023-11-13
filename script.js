function runCode() {
    const code = document.getElementById('code').value;

    // Simulate code execution (replace this with actual backend execution)
    const output = executeCode(code);

    // Display the output
    document.getElementById('output').innerText = output;
}

function executeCode(code) {
    try {
        // Simulate code execution for demonstration
        const result = eval(code);
        return result.toString();
    } catch (error) {
        return `Error: ${error.message}`;
    }
}
