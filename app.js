async function main() {
    let pyodide = await loadPyodide();
    await pyodide.loadPackage(['ioos_qc', 'pandas']);

    pyodide.runPython(`print('Hello world, from the browser!')`);
  };

  main();