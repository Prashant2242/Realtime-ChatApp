
const upload = async (file) => {
    if (!file) {
        alert("Please select a file first!");
        return null;
    }

    const filePath = `uploads/${file.name}`;

    try {
        // ✅ Upload file to Supabase Storage
        const { data, error } = await supabase.storage
            .from("your_bucket_name") // ✅ Replace with your actual bucket name
            .upload(filePath, file, { upsert: true });

        if (error) {
            console.error("Upload Error:", error.message);
            alert("Upload failed!");
            return null;
        }

        // ✅ Get the public URL of the uploaded file
        const { publicUrl } = supabase.storage
            .from("your_bucket_name")
            .getPublicUrl(filePath);

        alert("File uploaded successfully!");
        return publicUrl;
    } catch (err) {
        console.error("Unexpected Error:", err);
        return null;
    }
};

export { upload };