const userSlider = document.getElementById('userSlider');
userSlider.addEventListener('input', () => {
  const value = userSlider.value;
  // Highlight the pricing plan based on the value (you'll need to implement this logic)
  highlightPricingPlan(value);
});

function highlightPricingPlan(value) {
  // Implement the logic to highlight the appropriate pricing plan based on the value
  // For example, change CSS classes to highlight the plan based on the value range
}
