class Aren {
  constructor() {
    this.body = document.body;
    this.sidebars = this.body.querySelector('.sidebars');
    this.timeout = null;
  }
  async toggleSidebar(close, sidebar) {
    this.timeout && clearTimeout(this.timeout);
    if (this.body.classList.contains('sidebar-opened') || close) {
      return new Promise((resolve) => {
        this.body.classList.remove('sidebar-opened');
        this.timeout = setTimeout(() => {
          this.sidebars.classList.remove('opened');
          this.sidebars.querySelectorAll('.sidebar-cont').forEach(sidebarCont => {
            if (!sidebarCont.classList.contains('hidden')) {
              sidebarCont.classList.add('hidden');
            }
          })
          resolve();
        }, 300);
      });
    } else {
      sidebar && sidebar.classList.remove('hidden');
      this.timeout = setTimeout(() => {
        this.body.classList.add('sidebar-opened');
        this.sidebars.classList.add('opened');
      }, 10);
      return Promise.resolve();
    }
  }
}

export default Aren