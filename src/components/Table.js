import React, { Component } from 'react';
import '../App.css';

class Table extends Component {

    render() {
        return(
            <div>
                <h1>Recipes</h1>

                <table class="center">
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Source</th>
                    </tr>
                    <tr>
                        <td>
                            <a href="https://www.bonappetit.com/recipe/smashed-cucumber-salad-with-zaatar-and-feta">
                                Smashed cucumber salad
                            </a>
                        </td>
                        <td>
                            A light cucumber salad made with Za'atar and Feta cheese.
                        </td>
                        <td>
                            <i>Bon Appétit</i>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="https://www.foodnetwork.com/recipes/food-network-kitchen/vegetable-tarte-tatin-recipe-1973480">
                                Vegetable tarte tatin
                            </a>
                        </td>
                        <td>
                            A sweet and savory vegatable tart.
                        </td>
                        <td>
                            <i>Food Network</i>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="https://www.bonappetit.com/recipe/adam-rapoports-fig-caprese">
                                Fig caprese salad
                            </a>
                        </td>
                        <td>
                            A light salad of figs, basil, and mozzarella.
                        </td>
                        <td>
                            <i>Bon Appétit</i>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default Table;