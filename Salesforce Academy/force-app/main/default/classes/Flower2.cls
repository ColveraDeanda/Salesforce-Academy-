public with sharing class Flower2 {
    // color, height, maxHeight, numberOfPetals
    private String color;
    private decimal height;
    private decimal maxHeight;
    private Integer numberOfPetals;

    public Flower2(String color, decimal height, decimal maxHeight, Integer numberOfPetals) {
        this.color = color;
        this.height = height;
        this.maxHeight = height;
        this.numberOfPetals = numberOfPetals;
    }

    public void printFlower() {
        System.debug('The color is +' + this.color +
                 '\n  The height is ' + this.height);
    }
}
