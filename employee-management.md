---
description: Create, edit, view, and remove employee records.
icon: users
---

# Employee management

## Employee management

Flugo manages employee records through a CRUD interface. Changes persist in Firestore.

### View employees

The employee list shows the registered collaborators. Use it as the starting point for employee management.

### Create an employee

The creation flow uses a multi-step form. Complete each step, then submit the record.

The form validates these required details:

* Name
* Email
* Department

### Edit an employee

Open an employee’s edit action from the list. Update the data in the modal, then save the changes.

### Delete an employee

Start deletion from the employee list. Confirm the action before the record is removed.

{% hint style="warning" %}
Deletion removes the employee record from Firestore. Confirm the selected employee before proceeding.
{% endhint %}

### Interface

The application uses Material UI components and icons. The main layout includes a sidebar and top bar.
