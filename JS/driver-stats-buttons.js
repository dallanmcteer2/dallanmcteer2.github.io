function statsToggleResults () {
    let statsHtml;
    let driverTitle = "";

    // ALL PLATFORMS
    if (document.getElementById('all-platforms-button').checked) {
        driverTitle = "Cross-Platform Stats -";
        if (document.getElementById('tier-1-button').checked) {
            statsHtml = "stats/all-platforms/tier-1.html";
            driverTitle += " Tier 1";
        } else if (document.getElementById('tier-2-button').checked) {
            statsHtml = "stats/all-platforms/tier-2.html";
            driverTitle += " Tier 2";
        } else if (document.getElementById('tier-3-button').checked) {
            statsHtml = "stats/all-platforms/tier-3.html";
            driverTitle += " Tier 3";
        } else if (document.getElementById('tier-4-button').checked) {
            statsHtml = "stats/all-platforms/tier-4.html";
            driverTitle += " Tier 4";
        } else if (document.getElementById('tier-5-button').checked) {
            statsHtml = "stats/all-platforms/tier-5.html";
            driverTitle += " Tier 5";
        } else if (document.getElementById('tier-6-button').checked) {
            statsHtml = "stats/all-platforms/tier-6.html";
            driverTitle += " Tier 6";
        }
    }

    // PC (STEAM)
    if (document.getElementById('pc-steam-button').checked) {
        driverTitle = "PC Stats -";
        if (document.getElementById('tier-1-button').checked) {
            statsHtml = "stats/pc-steam/tier-1.html";
            driverTitle += " Tier 1";
        } else if (document.getElementById('tier-2-button').checked) {
            statsHtml = "stats/pc-steam/tier-2.html";
            driverTitle += " Tier 2";
        } else if (document.getElementById('tier-3-button').checked) {
            statsHtml = "stats/pc-steam/tier-3.html";
            driverTitle += " Tier 3";
        } else if (document.getElementById('tier-4-button').checked) {
            statsHtml = "stats/pc-steam/tier-4.html";
            driverTitle += " Tier 4";
        } else if (document.getElementById('tier-5-button').checked) {
            statsHtml = "stats/pc-steam/tier-5.html";
            driverTitle += " Tier 5";
        } else if (document.getElementById('tier-6-button').checked) {
            statsHtml = "stats/pc-steam/tier-6.html";
            driverTitle += " Tier 6";
        }
    }

    // PLAYSTATION
    if (document.getElementById('playstation-button').checked) {
        driverTitle = "PlayStation Stats -";
        if (document.getElementById('tier-1-button').checked) {
            statsHtml = "stats/playstation/tier-1.html";
            driverTitle += " Tier 1";
        } else if (document.getElementById('tier-2-button').checked) {
            statsHtml = "stats/playstation/tier-2.html";
            driverTitle += " Tier 2";
        } else if (document.getElementById('tier-3-button').checked) {
            statsHtml = "stats/playstation/tier-3.html";
            driverTitle += " Tier 3";
        } else if (document.getElementById('tier-4-button').checked) {
            statsHtml = "stats/playstation/tier-4.html";
            driverTitle += " Tier 4";
        } else if (document.getElementById('tier-5-button').checked) {
            statsHtml = "stats/playstation/tier-5.html";
            driverTitle += " Tier 5";
        } else if (document.getElementById('tier-6-button').checked) {
            statsHtml = "stats/playstation/tier-6.html";
            driverTitle += " Tier 6";
        }
    }

    // XBOX
    if (document.getElementById('xbox-button').checked) {
        driverTitle = "Xbox Stats -";
        if (document.getElementById('tier-1-button').checked) {
            statsHtml = "stats/xbox/tier-1.html";
            driverTitle += " Tier 1";
        } else if (document.getElementById('tier-2-button').checked) {
            statsHtml = "stats/xbox/tier-2.html";
            driverTitle += " Tier 2";
        } else if (document.getElementById('tier-3-button').checked) {
            statsHtml = "stats/xbox/tier-3.html";
            driverTitle += " Tier 3";
        } else if (document.getElementById('tier-4-button').checked) {
            statsHtml = "stats/xbox/tier-4.html";
            driverTitle += " Tier 4";
        } else if (document.getElementById('tier-5-button').checked) {
            statsHtml = "stats/xbox/tier-5.html";
            driverTitle += " Tier 5";
        } else if (document.getElementById('tier-6-button').checked) {
            statsHtml = "stats/xbox/tier-6.html";
            driverTitle += " Tier 6";
        }
    }

    // Check screen width and update driverTitle
    if (window.matchMedia("(max-width: 62.49em)").matches) {
        driverTitle = driverTitle.replace("PlayStation", "PS");
        driverTitle = driverTitle.replace("Tier ", "T");
        driverTitle = driverTitle.replace("Cross-Platform", "Total");
    }

    // Update driver-title text
    $('.driver-title').text(driverTitle);

    if (statsHtml) {
        $.ajax({
            url: statsHtml,
            method: 'GET',
            success: function() {
                $('#stats-js').load(statsHtml);
            },
            error: function() {
                $('#stats-js').load("/drivers/default-stats.html");
            }
        });
    }
}
