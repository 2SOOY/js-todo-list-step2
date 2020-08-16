export const todoTitleHTML = (userName) => `
  <span><strong>${userName}</strong>'s Todo List</span>`;

export const userButtonHTML = (userName) => `
  <button class="ripple active">${userName}</button>`;

export const todoItemHTML = (todo) => `
  <li id=${todo._id}>
    <div class="view">
      <input class="toggle" type="checkbox" ${todo.isCompleted && 'checked'}/>
      <label class="label">
        <span class="chip secondary">2순위</span>
        ${todo.contents}
      </label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value=${todo.contents} />
  </li>`;

export const todoPriorityHTML = () => `
  <select class="chip select">
    <option value="0" selected>0순위</option>
    <option value="1">1순위</option>
    <option value="2">2순위</option>
  </select>`;

export const loadingViewHTML = () => `
  <li>
    <div class="view">
      <label class="label">
        <div class="animated-background">
          <div class="skel-mask-container">
            <div class="skel-mask"></div>
          </div>
        </div>
      </label>
    </div>
  </li>
`;

export const todoCountHTML = (count) => `총 <strong>${count}</strong> 개`;
