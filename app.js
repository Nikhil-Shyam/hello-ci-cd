function greet(name) {
    if (!name) {
        return "Hello, World!";
    }
    return 'Hello, $(name}!';
}

// Make function available for testing
module.exports = greet;
    
// Run if called directly
if (require.main === module) {
    console.log(greet(process.argv[2]));
} 