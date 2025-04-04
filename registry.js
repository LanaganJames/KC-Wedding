async function fetchRegistry() {
    const sheetId = "1q6nR6up43Ts0hJC3zh0Kic7rLzuF7Vlj1Nprlq4Plbo";
    const sheetName = "Wedding Registry";
    const url = `https://docs.google.com/spreadsheets/d/1q6nR6up43Ts0hJC3zh0Kic7rLzuF7Vlj1Nprlq4Plbo/edit?gid=0#gid=0`;
    
    try {
        const response = await fetch(url);
        const text = await response.text();
        const json = JSON.parse(text.substring(47, text.length - 2));
        
        let itemsHtml = "<ul>";
        json.table.rows.forEach(row => {
            const item = row.c[0] ? row.c[0].v : "Unknown Item";
            const link = row.c[1] ? `<a href='${row.c[1].v}' target='_blank'>Buy</a>` : "";
            itemsHtml += `<li>${item} ${link}</li>`;
        });
        itemsHtml += "</ul>";
        
        document.getElementById("registry").innerHTML = itemsHtml;
    } catch (error) {
        document.getElementById("registry").innerHTML = "Error loading registry.";
    }
}

document.addEventListener("DOMContentLoaded", fetchRegistry);
