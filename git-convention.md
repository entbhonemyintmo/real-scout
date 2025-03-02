# Git Commit Convention Guide

## Why Use a Commit Convention?

A structured commit message format helps improve collaboration, maintainability, and version control clarity. This guide is designed for small frontend teams (3-5 members) to ensure consistency and readability.

## Commit Message Format

Each commit message should follow this structure:

```
<type>(<scope>): <message>

[optional body]

[optional footer]
```

### 1. **Commit Types**

| Type       | Description                                               |
| ---------- | --------------------------------------------------------- |
| `feat`     | A new feature                                             |
| `fix`      | A bug fix                                                 |
| `chore`    | Maintenance tasks (e.g., refactoring, dependency updates) |
| `docs`     | Documentation updates                                     |
| `style`    | Code formatting changes (no logic changes)                |
| `refactor` | Code improvements without changing behavior               |
| `test`     | Adding or updating tests                                  |
| `ci`       | Changes to CI/CD configurations                           |
| `build`    | Build-related changes (e.g., Webpack, package.json)       |

### 2. **Scope (Optional but Recommended)**

The scope specifies the area of the frontend codebase affected by the change. Examples:

-   `components`
-   `styles`
-   `hooks`
-   `utils`
-   `state`
-   `api`

### 3. **Message**

The message should be in **imperative form** (e.g., "Add login button" instead of "Added"). Keep it concise but descriptive.

---

## Examples

### Feature Commit:

```
feat(button): add primary button component
```

### Bug Fix Commit:

```
fix(navbar): resolve dropdown alignment issue
```

### Chore Commit:

```
chore(deps): update React and Next.js dependencies
```

### Documentation Commit:

```
docs(readme): update project setup instructions
```

### Style Commit:

```
style(global): apply consistent spacing in CSS
```

### Test Commit:

```
test(utils): add unit tests for date formatter
```

---

## Best Practices

-   **Use lowercase for type and scope.**
-   **Write commit messages in English** to ensure clarity for all team members.
-   **Keep messages concise but meaningful.**
-   **Use the present tense (e.g., "fix", "add", "update").**
-   **Avoid commits with vague messages like "fix bug" or "update code".**
-   **Group related changes together in a single commit.**

---

## Branch Naming Convention

To keep branches organized, use the following format:

```
<type>/<short-description>
```

### Examples:

-   `feat/navbar-redesign`
-   `fix/button-click`
-   `chore/update-dependencies`

---

## Pull Request Guidelines

-   Ensure your branch is **up to date** before opening a PR.
-   Follow the commit convention.
-   Keep PRs **focused** (avoid unrelated changes).
-   Include a **clear description** of changes in the PR.
-   Request reviews from at least **one teammate**.

---

This guide ensures a **clean, readable, and structured commit history**, making it easier to collaborate and maintain the frontend project. 🚀
