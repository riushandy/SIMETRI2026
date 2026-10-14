 // ---- Mobile menu ----
        const btn = document.getElementById("menu-btn");
        const menu = document.getElementById("mobile-menu");

        btn.addEventListener("click", () => {
            const nowOpen = menu.classList.toggle("hidden") === false;
            document.getElementById("icon-open").classList.toggle("hidden");
            document.getElementById("icon-close").classList.toggle("hidden");
            btn.setAttribute("aria-expanded", String(nowOpen));
        });

        const DOT = "h-[18px] rounded-full transition-all duration-300";
        const DOT_ON = "bg-[#7A3D21] w-[47px]";
        const DOT_OFF = "bg-[#C07E4E] w-[18px]";