# vscode-tdd-boilerplate

## Contains

- vscode extension recommendation list
- project configuration

## How to use

- Open this folder with vscode
- On extensions pane, select "Workspace recommendations" and install all of them
- Run `npm i --dev-dependencies` to get the test runner and framework
- Select `Jest: Start runner` from the command palette if it's not running yet.
- Select `Coverage Gutters: Watch` from the command palette.

There's no need to run any test runner from a command line! VSCode will handle that internally.

## Screenshot

![Screenshot](screenshot.png?raw=true "Screenshot")

**Left pane:** Actual Code with displayed coverage information from Jest and Coverage Gutters

**Right pane:** Test code with test case status displayed next to each test. By setting a breakpoint on a failing test and clicking "debug", you can do a step by step debugging of test cases.

**Bottom pane:** The **Problems-Pane** will show you syntax issues and failing tests as well.
The **Output-Pane** can display you the console output of Jest, in case something is not working as expected.

## Extensions

- `hookyqr.beautify`: Auto cleanup code on save
- `ryanluker.vscode-coverage-gutters`: Displays code coverage augmentation inline
- `dbaeumer.vscode-esline`: Detects and auto fixes syntax issues
- `orta.vscode-jest`: The test runner
- `fknop.vscode-npm`: npm support for vscode
- `eg2.vscode-npm-script`: reading/offering npm scripts
- `christian-kohler.npm-intellisense`: Intellisense for npm
- `ms-vsliveshare.vsliveshare`: Collaboration extension
- `robertohuertasm.vscode-icons`: Nice icon set

## Configuration

```json
// Coverage gutters display options
// Only one can be set to true - vscode limitation
"coverage-gutters.showLineCoverage": false,
"coverage-gutters.showGutterCoverage": true,
"coverage-gutters.showRulerCoverage": false,

// Adds Coverage summary on top of each file
"jest.showCoverageOnLoad": true,
```

Coverage gutters shows coverage on the left next to the line numbers, colorize the full line (colors configurable in plugin settings) or colorize the ruler. Only enable one of them.

Jest coverage information adds summarized coverage statistics on top of each file.

---

```json
"editor.formatOnSave": true,
"editor.rulers": [
    120
],

// Autoclean code
"eslint.autoFixOnSave": true,

"git.autofetch": true,
"git.enableSmartCommit": true,
"git.confirmSync": true,

"workbench.iconTheme": "vscode-icons"
```

Basic settings for code cleaning and git syncing