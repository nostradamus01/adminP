import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://pkukcwunhienbdkwdtiw.supabase.co", process.env.SUPABASE_KEY);

export default async function handler(request, response) {
  try {
    const { data } = request.body;

    const { error } = await supabase
      .from('platforms')
      .insert({ cpu: data.cpu, gpu: data.gpu, chipset: data.chipset });
    
    response.status(200).json({ error: error });
  } catch (e) {
    response.status(500).json({ error: e });
  }
}