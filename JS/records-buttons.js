function statsToggleResults () {
    let recordsHtml;
    let recordsTitle = "";

    // ALL PLATFORMS - T1
    if ((document.getElementById('tier-1-button').checked) && (document.getElementById('wins-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T1 - Wins";
        recordsHtml = "stats/all-platforms/tier-1/wins.html";
    }
    if ((document.getElementById('tier-1-button').checked) && (document.getElementById('podiums-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T1 - Podiums";
        recordsHtml = "stats/all-platforms/tier-1/podiums.html";
    }
    if ((document.getElementById('tier-1-button').checked) && (document.getElementById('poles-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T1 - Poles";
        recordsHtml = "stats/all-platforms/tier-1/poles.html";
    }
    if ((document.getElementById('tier-1-button').checked) && (document.getElementById('fastest-laps-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T1 - Fastest Laps";
        recordsHtml = "stats/all-platforms/tier-1/fastest-laps.html";
    }
    if ((document.getElementById('tier-1-button').checked) && (document.getElementById('points-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T1 - Points";
        recordsHtml = "stats/all-platforms/tier-1/points.html";
    }
    if ((document.getElementById('tier-1-button').checked) && (document.getElementById('races-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T1 - Races";
        recordsHtml = "stats/all-platforms/tier-1/races.html";
    }
    if ((document.getElementById('tier-1-button').checked) && (document.getElementById('drivers-titles-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T1 - Drivers' Titles";
        recordsHtml = "stats/all-platforms/tier-1/drivers-titles.html";
    }
    if ((document.getElementById('tier-1-button').checked) && (document.getElementById('teams-titles-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T1 - Teams' Titles";
        recordsHtml = "stats/all-platforms/tier-1/teams-titles.html";
    }

    // ALL PLATFORMS - T2
    if ((document.getElementById('tier-2-button').checked) && (document.getElementById('wins-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T2 - Wins";
        recordsHtml = "stats/all-platforms/tier-2/wins.html";
    }
    if ((document.getElementById('tier-2-button').checked) && (document.getElementById('podiums-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T2 - Podiums";
        recordsHtml = "stats/all-platforms/tier-2/podiums.html";
    }
    if ((document.getElementById('tier-2-button').checked) && (document.getElementById('poles-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T2 - Poles";
        recordsHtml = "stats/all-platforms/tier-2/poles.html";
    }
    if ((document.getElementById('tier-2-button').checked) && (document.getElementById('fastest-laps-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T2 - Fastest Laps";
        recordsHtml = "stats/all-platforms/tier-2/fastest-laps.html";
    }
    if ((document.getElementById('tier-2-button').checked) && (document.getElementById('points-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T2 - Points";
        recordsHtml = "stats/all-platforms/tier-2/points.html";
    }
    if ((document.getElementById('tier-2-button').checked) && (document.getElementById('races-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T2 - Races";
        recordsHtml = "stats/all-platforms/tier-2/races.html";
    }
    if ((document.getElementById('tier-2-button').checked) && (document.getElementById('drivers-titles-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T2 - Drivers' Titles";
        recordsHtml = "stats/all-platforms/tier-2/drivers-titles.html";
    }
    if ((document.getElementById('tier-2-button').checked) && (document.getElementById('teams-titles-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T2 - Teams' Titles";
        recordsHtml = "stats/all-platforms/tier-2/teams-titles.html";
    }

    // ALL PLATFORMS - T3
    if ((document.getElementById('tier-3-button').checked) && (document.getElementById('wins-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T3 - Wins";
        recordsHtml = "stats/all-platforms/tier-3/wins.html";
    }
    if ((document.getElementById('tier-3-button').checked) && (document.getElementById('podiums-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T3 - Podiums";
        recordsHtml = "stats/all-platforms/tier-3/podiums.html";
    }
    if ((document.getElementById('tier-3-button').checked) && (document.getElementById('poles-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T3 - Poles";
        recordsHtml = "stats/all-platforms/tier-3/poles.html";
    }
    if ((document.getElementById('tier-3-button').checked) && (document.getElementById('fastest-laps-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T3 - Fastest Laps";
        recordsHtml = "stats/all-platforms/tier-3/fastest-laps.html";
    }
    if ((document.getElementById('tier-3-button').checked) && (document.getElementById('points-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T3 - Points";
        recordsHtml = "stats/all-platforms/tier-3/points.html";
    }
    if ((document.getElementById('tier-3-button').checked) && (document.getElementById('races-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T3 - Races";
        recordsHtml = "stats/all-platforms/tier-3/races.html";
    }
    if ((document.getElementById('tier-3-button').checked) && (document.getElementById('drivers-titles-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T3 - Drivers' Titles";
        recordsHtml = "stats/all-platforms/tier-3/drivers-titles.html";
    }
    if ((document.getElementById('tier-3-button').checked) && (document.getElementById('teams-titles-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T3 - Teams' Titles";
        recordsHtml = "stats/all-platforms/tier-3/teams-titles.html";
    }

    // ALL PLATFORMS - T4
    if ((document.getElementById('tier-4-button').checked) && (document.getElementById('wins-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T4 - Wins";
        recordsHtml = "stats/all-platforms/tier-4/wins.html";
    }
    if ((document.getElementById('tier-4-button').checked) && (document.getElementById('podiums-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T4 - Podiums";
        recordsHtml = "stats/all-platforms/tier-4/podiums.html";
    }
    if ((document.getElementById('tier-4-button').checked) && (document.getElementById('poles-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T4 - Poles";
        recordsHtml = "stats/all-platforms/tier-4/poles.html";
    }
    if ((document.getElementById('tier-4-button').checked) && (document.getElementById('fastest-laps-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T4 - Fastest Laps";
        recordsHtml = "stats/all-platforms/tier-4/fastest-laps.html";
    }
    if ((document.getElementById('tier-4-button').checked) && (document.getElementById('points-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T4 - Points";
        recordsHtml = "stats/all-platforms/tier-4/points.html";
    }
    if ((document.getElementById('tier-4-button').checked) && (document.getElementById('races-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T4 - Races";
        recordsHtml = "stats/all-platforms/tier-4/races.html";
    }
    if ((document.getElementById('tier-4-button').checked) && (document.getElementById('drivers-titles-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T4 - Drivers' Titles";
        recordsHtml = "stats/all-platforms/tier-4/drivers-titles.html";
    }
    if ((document.getElementById('tier-4-button').checked) && (document.getElementById('teams-titles-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T4 - Teams' Titles";
        recordsHtml = "stats/all-platforms/tier-4/teams-titles.html";
    }

    // ALL PLATFORMS - T5
    if ((document.getElementById('tier-5-button').checked) && (document.getElementById('wins-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T5 - Wins";
        recordsHtml = "stats/all-platforms/tier-5/wins.html";
    }
    if ((document.getElementById('tier-5-button').checked) && (document.getElementById('podiums-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T5 - Podiums";
        recordsHtml = "stats/all-platforms/tier-5/podiums.html";
    }
    if ((document.getElementById('tier-5-button').checked) && (document.getElementById('poles-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T5 - Poles";
        recordsHtml = "stats/all-platforms/tier-5/poles.html";
    }
    if ((document.getElementById('tier-5-button').checked) && (document.getElementById('fastest-laps-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T5 - Fastest Laps";
        recordsHtml = "stats/all-platforms/tier-5/fastest-laps.html";
    }
    if ((document.getElementById('tier-5-button').checked) && (document.getElementById('points-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T5 - Points";
        recordsHtml = "stats/all-platforms/tier-5/points.html";
    }
    if ((document.getElementById('tier-5-button').checked) && (document.getElementById('races-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T5 - Races";
        recordsHtml = "stats/all-platforms/tier-5/races.html";
    }
    if ((document.getElementById('tier-5-button').checked) && (document.getElementById('drivers-titles-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T5 - Drivers' Titles";
        recordsHtml = "stats/all-platforms/tier-5/drivers-titles.html";
    }
    if ((document.getElementById('tier-5-button').checked) && (document.getElementById('teams-titles-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T5 - Teams' Titles";
        recordsHtml = "stats/all-platforms/tier-5/teams-titles.html";
    }

    // ALL PLATFORMS - T6
    if ((document.getElementById('tier-6-button').checked) && (document.getElementById('wins-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T6 - Wins";
        recordsHtml = "stats/all-platforms/tier-6/wins.html";
    }
    if ((document.getElementById('tier-6-button').checked) && (document.getElementById('podiums-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T6 - Podiums";
        recordsHtml = "stats/all-platforms/tier-6/podiums.html";
    }
    if ((document.getElementById('tier-6-button').checked) && (document.getElementById('poles-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T6 - Poles";
        recordsHtml = "stats/all-platforms/tier-6/poles.html";
    }
    if ((document.getElementById('tier-6-button').checked) && (document.getElementById('fastest-laps-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T6 - Fastest Laps";
        recordsHtml = "stats/all-platforms/tier-6/fastest-laps.html";
    }
    if ((document.getElementById('tier-6-button').checked) && (document.getElementById('points-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T6 - Points";
        recordsHtml = "stats/all-platforms/tier-6/points.html";
    }
    if ((document.getElementById('tier-6-button').checked) && (document.getElementById('races-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T6 - Races";
        recordsHtml = "stats/all-platforms/tier-6/races.html";
    }
    if ((document.getElementById('tier-6-button').checked) && (document.getElementById('drivers-titles-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T6 - Drivers' Titles";
        recordsHtml = "stats/all-platforms/tier-6/drivers-titles.html";
    }
    if ((document.getElementById('tier-6-button').checked) && (document.getElementById('teams-titles-button').checked)) {
        recordsTitle = "Cross-Platform Stats - T6 - Teams' Titles";
        recordsHtml = "stats/all-platforms/tier-6/teams-titles.html";
    }

    // Check screen width and update recordsTitle
    if (window.matchMedia("(max-width: 62.49em)").matches) {
        recordsTitle = recordsTitle.replace("PlayStation", "PS");
        recordsTitle = recordsTitle.replace("Tier ", "T");
        recordsTitle = recordsTitle.replace("Cross-Platform", "Total");
    }

    if (recordsHtml) {
        $.ajax({
            url: recordsHtml,
            method: 'GET',
            success: function() {
                $('#records-js').load(recordsHtml);
                $('.records-title').text(recordsTitle);
            },
            error: function() {
                $('#records-js').load("/records/error.html");
                recordsTitle = "Error - Stats Not Found";
                $('.records-title').text(recordsTitle);
            }
        });
    }
}
