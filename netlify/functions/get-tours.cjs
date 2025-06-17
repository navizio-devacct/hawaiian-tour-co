const { createClient } = require('@supabase/supabase-js');

exports.handler = async (event) => {
  console.log("🔥 Function hit");

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

  const location = event.queryStringParameters.location || "Oahu";
  console.log("📍 Searching for location:", location);

  try {
    // ✅ Fetch all tours in batches to bypass 1000 limit
    let allTours = [];
    let from = 0;
    const batchSize = 1000;
    let hasMore = true;

    while (hasMore) {
      let query = supabase
        .from('tours')
        .select('*')
        .range(from, from + batchSize - 1)
        .order('id');

      if (location !== "all") {
        query = query.eq('location', location);
      }

      const { data, error } = await query;

      if (error) {
        console.error("❌ Supabase Error:", error.message);
        return {
          statusCode: 500,
          body: JSON.stringify({ error: error.message }),
        };
      }

      if (data && data.length > 0) {
        allTours = [...allTours, ...data];
        from += batchSize;
        hasMore = data.length === batchSize; // Continue if we got a full batch
      } else {
        hasMore = false;
      }
    }

    console.log("📦 Total returned tours:", allTours.length);

    return {
      statusCode: 200,
      body: JSON.stringify(allTours),
      headers: {
        'Content-Type': 'application/json',
      },
    };

  } catch (err) {
    console.error("❌ Function Error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch tours" }),
    };
  }
};