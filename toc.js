// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">介绍</a></li><li class="chapter-item expanded affix "><li class="part-title">团队协作</li><li class="chapter-item expanded "><a href="github/index.html"><strong aria-hidden="true">1.</strong> GitHub</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="github/getting-started.html"><strong aria-hidden="true">1.1.</strong> 开始使用</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="github/set-git-remote-url.html"><strong aria-hidden="true">1.1.1.</strong> 设置远程URL</a></li></ol></li><li class="chapter-item expanded "><a href="github/repository.html"><strong aria-hidden="true">1.2.</strong> 仓库</a></li><li class="chapter-item expanded "><a href="github/issues.html"><strong aria-hidden="true">1.3.</strong> 问题跟踪</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">环境构建</li><li class="chapter-item expanded "><a href="ubuntu_environment/index.html"><strong aria-hidden="true">2.</strong> ubuntu环境构建</a></li><li class="chapter-item expanded affix "><li class="part-title">导航</li><li class="chapter-item expanded "><a href="sentry/index.html"><strong aria-hidden="true">3.</strong> 导航</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="sentry/map.html"><strong aria-hidden="true">3.1.</strong> 建图定位感知</a></li><li class="chapter-item expanded "><a href="sentry/path-planning.html"><strong aria-hidden="true">3.2.</strong> 路径规划</a></li><li class="chapter-item expanded "><a href="sentry/decision.html"><strong aria-hidden="true">3.3.</strong> 决策</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
