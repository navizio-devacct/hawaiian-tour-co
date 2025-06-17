const { createClient } = require('@supabase/supabase-js');

exports.handler = async (event) => {
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

  const {
    location = 'all',
    search = '',
    page = 1,
    limit = 500,
    show_on_homepage,
    is_featured,
    is_unforgettable,
    is_vip,
    is_pinned
  } = event.queryStringParameters || {};

  const offset = (parseInt(page) - 1) * parseInt(limit);
  const searchTerm = search.trim().toLowerCase();

  console.log("🔍 Params:", {
    location, search: searchTerm, page, limit,
    show_on_homepage, is_featured, is_unforgettable, is_vip, is_pinned
  });

  try {
    let query = supabase
      .from('tours')
      .select('*', { count: 'exact' });

    // 📍 Filter by location
    if (location && location !== 'all') {
      query = query.eq('location', location);
    }

    // 🔍 Search filter
    if (searchTerm) {
      query = query.or(
        `title.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%,category.ilike.%${searchTerm}%`
      );
    }

    // ✅ Boolean filters
    if (show_on_homepage === 'true') {
      query = query.eq('show_on_homepage', true);
    }
    if (is_featured === 'true') {
      query = query.eq('is_featured', true);
    }
    if (is_unforgettable === 'true') {
      query = query.eq('is_unforgettable', true);
    }
    if (is_vip === 'true') {
      query = query.eq('is_vip', true);
    }
    if (is_pinned === 'true') {
      query = query.eq('is_pinned', true);
    }

    // 🧭 Pagination
    query = query.range(offset, offset + parseInt(limit) - 1);

    const { data, error, count } = await query;

    if (error) {
      console.error("❌ Supabase error:", error.message);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total: count,
        },
      }),
    };
  } catch (err) {
    console.error("❌ Function error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
